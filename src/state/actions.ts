import { Action } from "../types"

export const addTask = (text:string, listId:string):Action => ({type: "ADD TASK", payload: {text, listId}})

export const addList = (text:string):Action => ({type: "ADD LIST", payload: text})
