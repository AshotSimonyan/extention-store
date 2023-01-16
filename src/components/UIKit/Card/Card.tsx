import React, {FC, useMemo} from 'react';
import useCollapse from "@gaearon/react-collapsed";
import {Icon, Button} from "components/UIKit";
import {ExtensionModel} from "../../../api/extensions-api";
import {useInstallExtension, useRemoveExtension, useUninstallExtension} from "../../../api/hooks";
import {useQueryClient} from "@tanstack/react-query";

export type CardMode = 'user' | 'dev' | 'owner';

interface CardProps {
    extension: ExtensionModel;
    mode: CardMode;
}

export const Card: FC<CardProps> = ({mode, extension: {img, title, companyUrl, companyName, id, longDesc, shortDesc, installed}}) => {
    const [isExpanded, setExpanded] = React.useState<boolean>(false);
    const queryClient = useQueryClient()

    const { getToggleProps, getCollapseProps } = useCollapse({
        isExpanded
    });

    const invalidate = async () => {
        await queryClient.invalidateQueries({ queryKey: ['getExtensions'] })
    }

    const removeMutation = useRemoveExtension(invalidate);
    const installMutation = useInstallExtension(invalidate);
    const uninstallMutation = useUninstallExtension(invalidate);

    const handleRemove = () => {
        removeMutation.mutate(id);
    }

    const handleInstall = () => {
        installMutation.mutate(id)
    }

    const handleUninstall = () => {
        uninstallMutation.mutate(id)
    }

    const buttonConfig = useMemo(() => {
        let text = 'install';
        let variant: 'primary' | 'outlined' | 'secondary' = 'primary';
        let handler: () => void = handleInstall;

        if(mode === 'user' && installed) {
            variant = 'outlined';
            text = 'uninstall'
            handler = handleUninstall;
        } else if(mode === 'dev') {
            text = 'REMOVE';
            variant = 'secondary';
            handler = handleRemove;
        }

        return  {
            variant,
            text,
            handler
        }
    }, [installed, mode, handleInstall]);

    const showStatus = useMemo(() => {
        return mode === 'user' && installed;
    }, [mode, installed]);

    const handleExpand = () => {
        setExpanded((expanded) => !expanded)
    }

    return (
        <div className='card'>
            <div className='card-top'>
                <img src={img || '/placeholder.png'} alt={title}/>
                <div className='card-top-content '>
                    <h2 className='truncate title'>{title}</h2>
                    {showStatus && <span className='chip installed'>Installed</span>}
                </div>
            </div>
            <p className='short-desc'>{shortDesc}</p>
            <div className='card-body' {...getCollapseProps()}>
                <p className='long-desc'>{longDesc}</p>
                <div className='author'>
                    <h4 className='mb-12'>Developed By:</h4>
                    <a className='btn-url truncate' href={companyUrl} target='_blank'>
                        <Icon name='link'/>
                        {companyName}
                    </a>
                </div>
            </div>
            <div className='card-footer'>
                {
                    mode !== 'owner' &&
                    <Button
                        className='btn'
                        onClick={buttonConfig.handler}
                        type='submit'
                        variant={buttonConfig.variant}
                    >
                        {buttonConfig.text}
                    </Button>
                }

                <button className={`expand-btn ml-auto ${isExpanded ? 'rotate' : ''}`} {...getToggleProps({
                    onClick: handleExpand
                })}><Icon  name='expand-more'/></button>
            </div>
        </div>
    );
};
