import * as S from "./refStyle.jsx"
import { useEffect, useRef } from "react"

function myRef() {

    const labelRef = useRef('')

    useEffect(() => {
        labelRef.current.innerHTML = "Digite o seu nome"
    }, [])

    //O useRef permite que eu manipule elementos diretamente no DOM
    
    return(
     <S.Container>
        <S.Form>
            <label ref={labelRef}>Nome</label>
            <input placeholder="nome" type="text" />
            <button>salvar</button>
        </S.Form>
     </S.Container>
    )
}

export default myRef