import React from 'react'
import styles from './custom.module.css'

export const INNERMODAL = "innerModal-id"
export const OUTTERMODAL = "outterModal-id"


export default function IntroPage() {
    const dismiss = () => {
        document.getElementById(OUTTERMODAL).classList.toggle(styles.outterModal)
        document.getElementById(OUTTERMODAL).classList.toggle(styles.dismiss)


        //document.getElementById(INNERMODAL).classList.toggle(INNERMODAL)
        //document.getElementById(INNERMODAL).classList.toggle(DISMISS) 
        // TODO: setup like code above to switch between the outtermodal setup and the dismiss setup when the user clicks
        // the x button on the intro with the terms and conditions
    }

    return(
        <div
            id={OUTTERMODAL}
            className={styles.outterModal}>
                <div
                    id={INNERMODAL} 
                    className={styles.innerModal}>
                    <div style={{
                        textAlign: 'right'
                    }}>
                        <button onClick={dismiss}>
                            x
                        </button>          
                    </div>
                    <h1 style={{textAlign: 'center'}}>Email4Change</h1>
                    <div style={{
                        marginLeft: '10px',
                        marginRight: '10px'
                    }}>
                        <h3>How it works:</h3>
                        <p>1. Fill out all the information you want to be stored into an email.</p>
                        <p>2. Fill out your email to be able to keep your re-useable link for safe keeping.</p>
                        <p>3. Send your generated email link to friends and family to spread the word about your cause!</p>
                        <br/>
                        <h4>But first, please agree to our Terms & Conditions:</h4>
                        <p style={{
                            borderStyle: 'solid',
                            borderColor: 'black'
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of 
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem Ipsum.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
                            in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one 
                            of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                            the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum 
                            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor 
                            sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those 
                            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                            are also reproduced in their exact original form, accompanied by English versions from 
                            the 1914 translation by H. Rackham.

                        </p>
                    </div>
                    
                </div>
            </div>
    )
}
