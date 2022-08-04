import React from "react";

import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";


/**
 * Componente presentacion. Visualizar listados
 */
const styleTable = {
  width: "1000px",
  height: "20px",
  border: "1px solid",
  borderCollapse: "separate",
  borderSpacing: "5px",
  background: '#1B1E1E url("gradient.gif") bottom left repeat-x',
  color: "#fff",
  tableAlign: "center",

}
const styleButoon = {
  padding: "1px",
  display: "flex"
}
class PostsList extends React.Component {

  render() {
    const { posts, handleEdit, handleDelete, handleAdd, handleWatch } = this.props;
    const items = posts.map((item) => {
      return (
        <tr key={item.id}>
          <td style={styleTable} >{item.title}</td>
          <td style={styleTable}>{item.body}</td>
          <td>

            < center>  {this.props.enabledAction && (

              <button type="button" className="btn btn-light" onClick={() => handleEdit(item)}>Update<MdModeEditOutline /></button>
            )}
              {this.props.enabledAction && (

                <button type="button" className="btn btn-dark" onClick={() => handleDelete(item)}>Delete<FaTrashAlt /></button>
              )}
              <br /> <br />
              <button type="button" className="btn btn-info" onClick={() => handleWatch(item.id)}>POSTS</button>
            </center>
          </td>
        </tr>
      );
    });

    return (
      <>
        <button style={styleButoon} type="button" className="btn btn-success" onClick={() => handleAdd()}><MdAddCircleOutline />Anadir otro</button>

        <table style={styleTable} >
          <thead>
            <tr>

              <th style={styleTable}>Title</th>
              <th style={styleTable}> Body</th>
              <th style={styleTable}>Acciones</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>

        </table>
      </>
    );
  }
}

export default PostsList;