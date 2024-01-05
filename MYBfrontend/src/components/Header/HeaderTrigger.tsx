import classes from './Header.module.scss'

export const HeaderTrigger = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="#5243C2"
            className="trigger"
            viewBox="0 0 16 16"
        >
            <g strokeWidth="1.333">
                <path d="M5.333 2.667h0v0h7.334" className={classes.line1}></path>
                <path d="M14 7.333v0H2v0h12" className={classes.line2}></path>
                <path d="M10.667 12v0H3.333v0h7.334" className={classes.line3}></path>
            </g>
        </svg>
    )
}

// export const HeaderClose = () => {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="none"
//             viewBox="0 0 16 16"
//         >
//             <path
//                 fill="#5243C2"
//                 d="M8 7.057l3.3-3.3.943.943-3.3 3.3 3.3 3.3-.943.943-3.3-3.3-3.3 3.3-.943-.943 3.3-3.3-3.3-3.3.943-.943 3.3 3.3z"
//             ></path>
//         </svg>
//     )
// }
