import styles from './Content.module.css'

function Content() {


    const valores=fetch('https://opentdb.com/api.php?amount=30&category=15').then(res=>{
        res.json().then(dados=>{
            console.log(dados.results.category)
            const div = document.querySelector('#div');
        
            div.textContent = "Categoria: "+ dados.results.category;
            const div1 = document.querySelector('#div1');
            div1.textContent = "Resposta Correta: "+ dados.results.correct_answer;
            });
    }).catch(erro=>{
        console.log(erro+" erro na requisição")
    });

     
           



    return (
    <>
        <div id="div"></div>
        <div id="div1"></div>

    </>
    )
}

export default Content