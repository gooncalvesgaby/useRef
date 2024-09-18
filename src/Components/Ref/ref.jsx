import * as S from "./refStyle.jsx"

function myRef() {
    return(
     <S.Container>
        <S.Form>
            <label>Digite seu nome</label>
            <input type="text" />
            <button>salvar</button>
        </S.Form>
     </S.Container>
    )
}

export default myRef