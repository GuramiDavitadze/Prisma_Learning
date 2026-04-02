export type TodoDataType ={
    id:number,
    name:string,
    description:string
}

export type TodoDataTypeBasic = Omit<TodoDataType,'id'>