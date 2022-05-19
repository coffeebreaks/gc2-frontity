import { styled, connect } from "frontity"

const InfoBox = ({ api, libraries }) => {
    const lineGray = "#e5e5e5"



    const TopRowWrapper = styled.div`
        display: flex;
        padding: 20px ;
        justify-content: center;
        flex-direction: row;
        border-top: 1px solid ${lineGray};
        border-bottom: 1px solid ${lineGray};

        @media(max-width: 800px){
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0px;
          padding-top: 2rem;
          min-width: 100%;
      
      }

`

const TopRowItem = styled.div`
    padding: 0 1rem;
    font-weight: 900;
    margin: 1px;
    display: flex;
    justify-content: center;
    text-align:center;
    font-size: 17px;
    text-transform: uppercase;
    flex-direction: column;
    align-items:center;
    width: 100%;


    @media(max-width: 800px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        max-width: 100%;
        padding: 0;
        padding-bottom: 1rem;
        flex-basis: 100%;
        font-size: 11px;
    }

`

const BottomWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    align-items: center;
    @media(max-width:800px){
        flex-direction: column;
    }
`

const BottomRowItem = styled.div`
    margin: 10px;
    text-align: center;
    padding: .5rem;
    width: 100%;
    border-right: 1px solid ${lineGray};
    &:last-child {
    border: none;
    }
    @media(max-width:800px){
        padding: 0px;
    }
`

    const MainWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`


    const Icon = styled.img`
        height: auto;
        max-height: 100px;
        max-width: 180px;
        width: auto;
        margin-bottom: 14px;
`
    const IconSmall = styled.img`
        height: auto;
        max-height: 50px;
        max-width: 90px;
        width: auto;
        margin-bottom: 14px;

`

    return (

        <MainWrapper>
            <TopRowWrapper>
                {api.top_row?.map((x, i) =>
                    <TopRowItem>
                        <IconSmall src={x.icon.url} alt={x.icon.alt}/>
                        {x.text}
                    </TopRowItem>
                )}
            </TopRowWrapper>

            <BottomWrapper>
                {api.bottom_row.map((x) =>
                    <BottomRowItem>
                        {x.text}
                    </BottomRowItem>
                )}
            </BottomWrapper>
        </MainWrapper>


    )

}

export default connect(InfoBox)