export interface Obra {
    subscribe(arg0: (data: import("./obraSeleccionada.interface").ObraSeleccionada[]) => void): string;
    title: string[];
}