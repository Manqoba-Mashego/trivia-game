import QuizCard from '@/components/QuizCard';
import { useSelectedCategory } from '@/stores/userCategory';



const Page = async ({params}) => {
    const myParams = await params
     const res = await fetch(`https://opentdb.com/api.php?amount=${myParams.numberOfQuestions}&category=${myParams.category}&difficulty=${myParams.difficulty}&type=multiple`,{ cache: "no-store" });
     const data = await res.json();

    const questions =[
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'General Knowledge',
      question: 'In &quot;Resident Evil 3&quot;, how many inventory slots does Jill have at the start of the game?',       
      correct_answer: '8',
      incorrect_answers: [1, 2, 3]
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'General Knowledge',
      question: 'Which musician has collaborated with American producer Porter Robinson and released the 2016 song &quot;Shelter&quot;?',
      correct_answer: 'Madeon',
      incorrect_answers: ["Kess", "Luffy", "Zorro"]
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'General Knowledge',
      question: 'Nephelococcygia is the practice of doing what?',
      correct_answer: 'Finding shapes in clouds',
      incorrect_answers: ["Lorem ipsum", "Dolor sit amet", "Atique sdg odod"]
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'General Knowledge',
      question: 'The word &quot;abulia&quot; means which of the following?',
      correct_answer: 'The inability to make decisions',
      incorrect_answers: ["Lorem ipsum", "Dolor sit amet", "Atique sdg odod"]
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'General Knowledge',
      question: 'Which one of these Swedish companies was founded in 1943?',
      correct_answer: 'IKEA',
      incorrect_answers: ["Lorem ipsum", "Dolor sit amet", "Atique sdg odod"]
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'General Knowledge',
      question: 'What is the romanized Korean word for &quot;heart&quot;?',
      correct_answer: 'Simjang',
      incorrect_answers: ["Lorem ipsum", "Dolor sit amet", "Atique sdg odod"]
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'General Knowledge',
      question: 'Which of these banks are NOT authorized to issue currency notes in Hong Kong?',
      correct_answer: 'OCBC',
      incorrect_answers: ["Lorem ipsum", "Dolor sit amet", "Atique sdg odod"]
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'General Knowledge',
      question: 'The Swedish word &quot;Grunka&quot; means what in English?',
      correct_answer: 'Thing',
      incorrect_answers: ["Lorem ipsum", "Dolor sit amet", "Atique sdg odod"]
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'General Knowledge',
      question: '&quot;Nephelococcygia&quot; is the practice of doing what? ',
      correct_answer: 'Finding shapes in clouds',
      incorrect_answers: ["Lorem ipsum", "Dolor sit amet", "Atique sdg odod"]
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'General Knowledge',
      question: 'Which film star has his statue in Leicester Square?',
      correct_answer: 'Charlie Chaplin',
      incorrect_answers: ["Lorem ipsum", "Dolor sit amet", "Atique sdg odod"]
    }
  ]

    //  return <QuizCard params={myParams} questions={questions} errorFetching={false}/>
     return <QuizCard params={myParams} questions={data.results} errorFetching={data.response_code !== 0}/>

}





export default Page