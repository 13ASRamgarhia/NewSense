import React, {useState, useEffect} from 'react'

export default function Footer(props) {
    const [outerDivStyle, setOuterDivStyle] = useState({top: '4.25em', bottom: 0, width: '100%', position: 'relative', color: '#000', backgroundColor: '#fff'})
    const [innerDivStyle, setInnerDivStyle] = useState({backgroundColor: 'rgba(0, 0, 0, 0.05)'})
    const [spanStyle, setSpanStyle] = useState({color: 'red', fontSize: '1.3em'})

    useEffect(() => {
        if(props.darkModeTheme === true){
            setOuterDivStyle({top: '4.25em', bottom: 0, width: '100%', position: 'relative', color: '#fff', backgroundColor: '#111827'})
            setInnerDivStyle({backgroundColor: 'rgb(17, 24, 39)', color: '#999'})
            setSpanStyle({color: 'white', fontSize: '1.3em'})
        }
        else{
            setOuterDivStyle({top: '4.25em', bottom: 0, width: '100%', position: 'relative', color: '#000', backgroundColor: '#fff'})
            setInnerDivStyle({backgroundColor: 'rgba(0, 0, 0, 0.05)', color: '#333'})
            setSpanStyle({color: 'red', fontSize: '1.3em'})
        }
    },[props.darkModeTheme])

    return (
        <div className="text-center text-lg-start bg-light text-muted" style={outerDivStyle}>
            <div className="text-center p-4" style={innerDivStyle}>
                Made with <span style={spanStyle}>&#9829;</span><span> by </span>
                <a className="text-reset fw-bold" target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/13asr/">Amandeep Singh</a>
                &nbsp;| Copyright <i className="bi bi-c-circle"></i> 2022 Amandeep Singh
            </div>
        </div>
    )
}

//#1f2937
//#a855f7