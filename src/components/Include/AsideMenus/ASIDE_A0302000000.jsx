import { RadioGroup } from "devextreme-react"

export const ASIDE_A0302000000 = () => {

    const searchUse = ['All', 'Y', 'N']

    return (
        <div className="search-cate">
            <div className="sc-box">
                <h5 className="sc-tit">
                    사용
                </h5>

                <div className="sc-cont">
                    <RadioGroup className="radio-group" items={searchUse} defaultValue={searchUse[0]} />
                </div>
            </div>
        </div>
    )
}