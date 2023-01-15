import {useMutation, useQuery} from "@tanstack/react-query";

import extensionsApi from "./extensions-api";

export function useGetExtensions(title: string = '') {
    return useQuery({
        queryKey: ['getExtensions', title],
        queryFn: () =>
            extensionsApi.getAll(title)
    })
}

export function useAddExtension(onSuccess?: () => void) {
    return useMutation({
        mutationFn: extensionsApi.add,
        onSuccess: onSuccess
    })
}

export function useRemoveExtension(onSuccess?: () => void) {
    return useMutation({
        mutationFn: extensionsApi.remove,
        onSuccess: onSuccess
    })
}

export function useInstallExtension(onSuccess?: () => void) {
    return useMutation({
        mutationFn: extensionsApi.install,
        onSuccess: onSuccess
    })
}

export function useUninstallExtension(onSuccess?: () => void) {
    return useMutation({
        mutationFn: extensionsApi.uninstall,
        onSuccess: onSuccess
    })
}
