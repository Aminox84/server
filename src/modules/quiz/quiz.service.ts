import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "./dto/createQuiz.dto";
import { QuizRepository } from "./quiz.repository";

@Injectable()
export class QuizService{
    constructor(
        @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
    ){}
    getallQuiz(){
        return [1,2,3,4,5,'Hello']
    }


    async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz);
    }
}