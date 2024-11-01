export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color : 'white',
    //     backgroundColor : 'black'    
    // })

    // const [btntext, setbtntext] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtntext("Enable Dark Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtntext("Enable Light Mode")    
    //     }
    // }

    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#212530' }}>
            <h1 className='my-3' style={{ color: props.mode === 'light' ? '#212530' : 'white' }}>About Us</h1>
            <div className="accordion" id="accordionExample"  >
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212530', color: props.mode === 'light' ? '#212530' : 'white' }} 
                    >
                    <h2 className="accordion-header" >
                        <button style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212530', color: props.mode === 'light' ? '#212530' : 'white' }} 
                     className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyse your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212530', color: props.mode === 'light' ? '#212530' : 'white' }} 
                    >
                        WordCraft gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or even finding specific patterns within text, WordCraft provides a comprehensive set of tools to help you manage, edit, and evaluate your content with ease. Suitable for writers, students, and professionals, it’s designed to streamline the process of text analysis and ensure accuracy across all your documents.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" >
                        <button style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212530', color: props.mode === 'light' ? '#212530' : 'white' }} 
                     className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212530', color: props.mode === 'light' ? '#212530' : 'white' }} 
                    >
                        WordCraft is a free character counter tool that provides instant character count & word count statistics for a given text. WordCraft reports the number of words and characters. Thus it is suitable for writing text with word/character limit.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212530', color: props.mode === 'light' ? '#212530' : 'white' }} 
                     className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212530', color: props.mode === 'light' ? '#212530' : 'white' }} 
                    >
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</div>
                    </div>
                </div>
             </div>
           {/* <div className='container my-3'>
            <button type='button' onClick={toggleStyle} className='btn btn-primary'>{btntext}</button>
            </div> */}
        </div>
    )
}