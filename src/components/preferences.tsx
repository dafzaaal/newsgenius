import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Prefernces(){

    const [language, setLanguage] = useState('');
    const [searchWord, setSearchWord] = useState('');
    const [click, setClick] = useState(false);
    const [imgURL, setImgURL] = useState('');
    const [headline, setHeadline] = useState('');
    const [urlToArticle, setURLtoArticle] = useState('');
    const [searchWordClick, setSearchWordClick] = useState(false);
    const [languageInputClick, setLanguageInputClick] = useState(false);

    const handleChangeSearchWord = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(event.target.value)
        console.log(searchWord);
    }

    const handleChangeLanguage = (event : React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(event.target.value);
        console.log(language);
    }

    const handleButtonChange = () => {
        setClick(!click);
    }


    const handleClearForm = () => {
        setSearchWord("");
        setLanguage("");
        setClick(false);
    }

    function generateSearchHint() {
        return(
            <p>Search hint!</p>

        );
    }

        
    const headers = {
        apiToken : "c872dc3ae35440aa84a7555f46c0c208",
    };


    async function getData(searchWord : string, lan : string, token : string) {
        try {
            const getURL : string = `https://newsapi.org/v2/everything?q=${searchWord}&language=${lan}&apiKey=${token}`;
            console.log(getURL);
            const response = await axios.get(getURL);
            console.log(response);
            const firstArticle = response.data.articles[0];
            setHeadline(firstArticle.title);
            setImgURL(firstArticle.urlToImage); 
            setURLtoArticle(firstArticle.url);
        }
        catch (e) {
            console.log("Error!", e);
        }
    }



    return(
        <div className='preference'>
            
            <form className='article-form'>
                <div className='keyword'>
                    <input type='text' placeholder=' Enter search word...' value = {searchWord} onChange={handleChangeSearchWord} onClick={() => {setSearchWordClick(!searchWordClick); setLanguageInputClick(false)}}></input>
                </div>

                {searchWordClick &&
                    <div>
                        <div className='searchWordTip'>
                            <h3>
                                Enter a topic of interest! For example "iPhone" to get the latest news regarding the latest iPhone or 
                                "bitcoin" to generate an article centered around the latest news around bitcoin
                            </h3>
                        </div>
                    </div>
                }

                <div className='languageChoice'>
                    <input type='text' placeholder=' Enter language...' value={language} onChange={handleChangeLanguage} onClick={() => {setLanguageInputClick(!languageInputClick); setSearchWordClick(false)}}></input>
                </div>

                {languageInputClick && 
                    <div>
                        <div className='languageTip'>
                            <h3>
                                Enter any of the following two-letter ISO-639-1 code to generate of article of said language <br />
                                [ar, de, en, es, fr, he, it, nl, no, pt, ru, sv, ud, zh]
                            </h3>
                        </div>
                    </div>

                }

            </form>

            <button className='btn' onClick={async () => {
                handleButtonChange();
                await getData(searchWord, language, headers.apiToken);
                
            }}>Get Article!</button>

            

            {click &&
                <div className='getArticles'> 
                    <div>
                        <a href={urlToArticle} className='article-data' target='_blank'>
                            <p>{headline}</p>
                            <img src={imgURL}/>
                        </a>  
                    </div>
                </div>
                }


            <button onClick={handleClearForm} className='btn'>Clear Form</button>

            <Link to='/'>
                <button className='main'>Main</button>
            </Link>
        </div>

    );
}

