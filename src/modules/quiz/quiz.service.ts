import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "./dto/createQuiz.dto";
import { Repository } from 'typeorm';
import { Quiz } from '../../entities/quiz.entity'

@Injectable()
export class QuizService{
    constructor(
        @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
    ){}
    async getallQuiz(){
        return await this.quizRepository.find()
    }


    async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
    }
}