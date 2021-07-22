import {Evaluation} from "./evaluation";
import { Image } from "../app/image";
import { File } from "../app/file";
import { Question } from "./question";
import { Teacher } from "../app/teacher"

export interface SelEvaluation {
    id?: number,
    answerQuestion?: Question,
    teacher?: Teacher;
}