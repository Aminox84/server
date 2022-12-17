import { Injectable } from "@nestjs/common";

@Injectable()
export class QuizService{
    getallQuiz(){
        return [1,2,3,4,5,'Hello']
    }

}