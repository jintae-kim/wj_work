import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/history.css"

const HistoryStack = () => {
  return (
    <Stack direction="horizontal" className="history-stack">
      <ul>
        <li>
          <Link to="/">History1</Link>
        </li>
      </ul>
    </Stack>
  )
}

export { HistoryStack }