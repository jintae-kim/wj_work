import { RadioGroup, TextBox } from "devextreme-react"

export const ASIDE_A0306010000 = () => {

    const searchUse = ['All', 'Y', 'N']
    const searchConfirm = ['All', 'P', 'Y', 'N']

    return (
        <div className="search-cate">
            
            <div className="sc-box">
                <h5 className="sc-tit">
                    Defect Code
                </h5>

                <div className="sc-cont">
                    <TextBox inputAttr="" className="dx-field-value" defaultValue="" />
                </div>
            </div>

            <div className="sc-box">
                <h5 className="sc-tit">
                    Defect Name
                </h5>

                <div className="sc-cont">
                    <TextBox inputAttr="" className="dx-field-value" defaultValue="" />
                </div>
            </div>

            <div className="sc-box">
                <h5 className="sc-tit">
                    Defct Group Name
                </h5>

                <div className="sc-cont">
                    <TextBox inputAttr="" className="dx-field-value" defaultValue="" />
                </div>
            </div>

            <div className="sc-box">
                <h5 className="sc-tit">
                    Defact Type
                </h5>

                <div className="sc-cont">
                    <TextBox inputAttr="" className="dx-field-value" defaultValue="" />
                </div>
            </div>

            <div className="sc-box">
                <h5 className="sc-tit">
                    사용
                </h5>

                <div className="sc-cont">
                    <RadioGroup className="radio-group" items={searchUse} defaultValue={searchUse[0]} />
                </div>
            </div>

            <div className="sc-box">
                <h5 className="sc-tit">
                    확정
                </h5>

                <div className="sc-cont">
                    <RadioGroup className="radio-group" items={searchConfirm} defaultValue={searchConfirm[0]} />
                </div>
            </div>
        </div>
    )
}