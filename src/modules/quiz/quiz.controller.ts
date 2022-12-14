import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/createQuiz.dto';
import { QuizService } from './quiz.service';


@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) { }

    @Get('/')
    getallQuiz() {
        return this.quizService.getallQuiz()
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
    }
}


