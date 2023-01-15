import React, {useCallback} from 'react';
import {Button, ButtonLink, Input, Textarea} from "components/UIKit";
import {useForm} from "react-hook-form";
import {maxLength, minLength, required} from "helpers/validations/validations";
import {useAddExtension} from "../api/hooks";
import {toBase64} from "../helpers";
import {ExtensionCreateModel} from "../api/extensions-api";
import {useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";

interface ExtensionForm {
    title: string;
    shortDesc: string;
    longDesc: string;
    companyName: string;
    companyUrl: string;
    img: FileList
}

const AddExtension = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        reset,
        control,
        setValue,
        setError,
        clearErrors,
    } = useForm<ExtensionForm>({
        mode: "onChange",
        defaultValues: {
            title: '',
            shortDesc: '',
            longDesc: '',
            companyName: '',
            companyUrl: '',
            img: undefined
        },
    });
    const queryClient = useQueryClient()
    const navigate = useNavigate();

    const invalidate = async () => {
        await queryClient.invalidateQueries({ queryKey: ['getExtensions'] })
    }

    const {mutate} = useAddExtension(invalidate);

    const onSubmit = useCallback(
        async (data: ExtensionForm) => {
            const base64 = await toBase64(data.img[0]);
            const dataToSend: ExtensionCreateModel = {
                ...data,
                img: base64
            }
            await mutate(dataToSend);
            navigate('/dev-company-dashboard')
        },
        [mutate],
    );

    return (
        <>
            <h1>Add New Extension</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <h2 className='text-divider'><span>1 Extension Name *</span></h2>
                <Input
                    placeholder="Extension Name *"
                    errorMessage={errors.title?.message}
                    {...register("title", required)}
                />

                <h2 className='text-divider'><span>2 Extension Description *</span></h2>
                <Textarea
                    placeholder="Brief Description *"
                    errorMessage={errors.shortDesc?.message}
                    {...register("shortDesc", maxLength)}
                />
                <Textarea
                    placeholder="Long Description *"
                    errorMessage={errors.longDesc?.message}
                    {...register("longDesc", minLength)}
                />

                <h2 className='text-divider'><span>3 Extension Icon *</span></h2>
                <Input
                    type="file"
                    placeholder="Link to Company Website *"
                    errorMessage={errors.companyUrl?.message}
                    {...register("img")}
                />

                <h2 className='text-divider'><span>4 Publisher Info *</span></h2>
                <Input
                    placeholder="Software Development Company Name *"
                    errorMessage={errors.companyName?.message}
                    {...register("companyName", required)}
                />
                <Input
                    placeholder="Link to Company Website *"
                    errorMessage={errors.companyUrl?.message}
                    {...register("companyUrl", required)}
                />

                <div className="button-group">
                    <Button type="submit">
                        Publish
                    </Button>
                    <ButtonLink
                        variant='outlined'
                        to='/dev-company-dashboard'
                    >
                        Cancel
                    </ButtonLink>
                </div>

            </form>
        </>
    );
};

export default AddExtension;
