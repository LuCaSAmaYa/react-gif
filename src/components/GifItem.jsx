
export const GifItem = ({ id, title, url }) => { //title, url, id

    //console.log({ id, title, url })

  return (
    <div className="card">
        <img src={ url }  alt={ title }   />
        <p>{title}</p>

    </div>
    //<div>GifItem</div>
  )
}
