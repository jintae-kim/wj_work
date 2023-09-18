export const ASIDE_A0101000000 = () => {
  return (
    <div className="search-cate">
      
      <div className="sc-box">
        <h5 className="sc-tit">
          Company
        </h5>

        <div className="sc-cont">
          <select name="" id="" className="sc-select">
            <option value="All">All</option>
          </select>
        </div>
      </div>

      <div className="sc-box">
        <h5 className="sc-tit">
          사용
        </h5>

        <div className="sc-cont">
          <label htmlFor="radio-use-all" className="radio-box">
            <input type="radio" id="radio-use-all" name="radio-use" defaultChecked/>
            <span className="radio-icon"></span>
            <span className="radio-tit">All</span>
          </label>

          <label htmlFor="radio-use-y" className="radio-box">
            <input type="radio" id="radio-use-y" name="radio-use"/>
            <span className="radio-icon"></span>
            <span className="radio-tit">Y</span>
          </label>

          <label htmlFor="radio-use-n" className="radio-box">
            <input type="radio" id="radio-use-n" name="radio-use"/>
            <span className="radio-icon"></span>
            <span className="radio-tit">N</span>
          </label>
        </div>
      </div>

      <div className="sc-box">
        <h5 className="sc-tit">
          확정
        </h5>

        <div className="sc-cont">
          <label htmlFor="radio-confirm-all" className="radio-box">
            <input type="radio" id="radio-confirm-all" name="radio-confirm" defaultChecked/>
            <span className="radio-icon"></span>
            <span className="radio-tit">All</span>
          </label>

          <label htmlFor="radio-confirm-p" className="radio-box">
            <input type="radio" id="radio-confirm-p" name="radio-confirm"/>
            <span className="radio-icon"></span>
            <span className="radio-tit">P</span>
          </label>

          <label htmlFor="radio-confirm-y" className="radio-box">
            <input type="radio" id="radio-confirm-y" name="radio-confirm"/>
            <span className="radio-icon"></span>
            <span className="radio-tit">Y</span>
          </label>

          <label htmlFor="radio-confirm-n" className="radio-box">
            <input type="radio" id="radio-confirm-n" name="radio-confirm"/>
            <span className="radio-icon"></span>
            <span className="radio-tit">N</span>
          </label>
        </div>
      </div>

    </div>
  )
}