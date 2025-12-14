import QuizCard from '@/components/QuizCard';

const Page = async ({params}) => {
    const myParams = await params
    const res = await fetch(`https://opentdb.com/api.php?amount=${myParams.numberOfQuestions}&category=${myParams.category}&difficulty=${myParams.difficulty}&type=multiple`,{ cache: "no-store" });
     const data = await res.json();
     return <QuizCard params={myParams} questions={data.results} errorFetching={data.response_code !== 0}/>

}





export default Page