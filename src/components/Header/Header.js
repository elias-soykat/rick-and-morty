import React from "react";
import "./Header.css";
import { RightOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerText">
        <h2>The Rick And Morty</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a
          architecto, suscipit modi dolorum amet recusandae error incidunt natus
          itaque vero quam asperiores maiores consequatur vitae vel, voluptatem
          possimus pariatur? Atque distinctio quaerat quisquam quas est quis
          provident temporibnostrum. In, doloribus. Ducimus, dolorem deserunt?
          Vel in veniam odio <br /> ipsa distinctio aliquid ex numquam? Nulla
          asperiores, id magni quis tempore enim sed facilis non aliquid sit.
          Accusamus placeat voluptates architecto. Eius obcaecati minus fugiat
          cumque mollitia, voluptate veniam alias eos sequi magnam iusto aut
          ipsum, cupiditate sit. Fuga, sapiente.
        </p>
        <button className="btn btn-primary px-4 mt-3">
          Read More <RightOutlined className="ps-3 pb-1" />
        </button>
      </div>
    </div>
  );
}
