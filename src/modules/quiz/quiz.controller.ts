import { Controller, Get } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
    @Get('/')
    getallQuiz(){
        return [1,2,3,4,5]
    }
}
