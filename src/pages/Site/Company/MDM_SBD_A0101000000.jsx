import React, { useState } from "react";
import { Breadcrumb, Stack, Button, Modal } from "react-bootstrap";
import "../../../assets/contents.css"
import "../../../assets/modal.css"


const MDM_SBD_A0101000000 = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (

    <div className="contents">

      <Stack direction="horizontal" className="page-header">
        <h2>          
          Company
        </h2>
        <Breadcrumb className="ms-auto breadcrumb-wrap">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            SITE
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Company</Breadcrumb.Item>
        </Breadcrumb>
      </Stack>

      <div className="grid-container">

        <div className="grid-section">
          <Stack direction="horizontal" className="grid-headline">
            <div className="result-info">
              <span className="title">Result</span>
              총 00개
            </div>
            <div className="grid-top-buttons ms-auto">
              <Button variant="outline-secondary" size="sm">
                SQL Viewer
              </Button>
              <Button variant="outline-secondary" size="sm">
                엑셀 다운로드
              </Button>
            </div>
          </Stack>

          <div className="grid-area">

            <div style={{ height: "600px", background: "#ddd" }}>그리드 영역</div>

          </div>

          <div className="grid-buttons text-end">
            <Button variant="secondary">등록</Button>
            <Button variant="secondary">삭제</Button>
            <Button variant="secondary" onClick={handleShow}>저장</Button>
            <Button variant="primary" onClick={handleShow2}>확정</Button>
          </div>

        </div>

        <div className="grid-section">

          <div className="grid-area">

            <div style={{ height: "600px", background: "#ddd" }}>그리드 영역</div>

          </div>

          <div className="grid-buttons text-end">
            <Button variant="secondary">등록</Button>
            <Button variant="secondary">삭제</Button>
            <Button variant="secondary" onClick={handleShow}>저장</Button>
            <Button variant="primary" onClick={handleShow2}>확정</Button>
          </div>
        </div>

      </div>

      {/* //-- 저장 모달 */}
      <Modal show={show} onHide={handleClose} className="modal-saveCon" centered>

        <Modal.Header>
          <Modal.Title>
            <h3 className="modal-tit">저장</h3>
            <span className="modal-subtit">Company</span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5 className="mc-tit">
            <span className="mct-icon"></span>저장목록(총 4개)
          </h5>

          <div className="grid-box">그리드영역</div>

          <p className="mc-ques">상기 항목을 저장 하시겠습니까?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button className="cancle-btn" onClick={handleClose}>
            취소
          </Button>
          <Button className="confirm-btn" onClick={handleClose}>
            확인
          </Button>
        </Modal.Footer>

      </Modal>
      {/* 저장 모달 --// */}


      {/* //-- 확정 모달 */}
      <Modal show={show2} onHide={handleClose2} className="modal-saveCon" centered>

        <Modal.Header>
          <Modal.Title>
            <h3 className="modal-tit">확정</h3>
            <span className="modal-subtit">Company</span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5 className="mc-tit">
            <span className="mct-icon"></span>확정목록(총 4개)
          </h5>

          <div className="grid-box">그리드영역</div>

          <p className="mc-ques">상기 항목을 확정 하시겠습니까?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button className="cancle-btn" onClick={handleClose2}>
            취소
          </Button>
          <Button className="confirm-btn" onClick={handleClose2}>
            확인
          </Button>
        </Modal.Footer>

      </Modal>
      {/* 확정 모달 --// */}

    </div>
  )
}
export {MDM_SBD_A0101000000};