import type { Issue } from "@/entities/issue/model/types";
import { noAny } from "../rules/no-any";

export const runCodeAnalysis = (code: string): Issue[] => {

    if (!noAny(code)) {
        return noAny(code)
    }

    
}