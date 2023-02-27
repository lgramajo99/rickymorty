function Error() {
    const _error = 'https://i.imgur.com/ZIQQXfV.png'

    return (<div >
        {/* <h1>Error: esta pagina no existe</h1> */}
        <img src={_error} alt="Error 404" />
    </div>)
}

export default Error;