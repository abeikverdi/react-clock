import React from "react";
import dateFormat from "dateformat";

export default class Layout extends React.Component {

    constructor() {
        super();
        var now = new Date();
        this.state = {time: dateFormat(now, "h:MM:ss")};
    }

    tick() {
        var now = new Date();
        this.setState({time: dateFormat(now, "h:MM:ss")});
    }

    componentDidMount() {
        setInterval(() => {
           this.tick()
        }, 1000);
    }

    render() {
        return (
        	<div>
        		<h1>Time: {this.state.time}</h1>
        	</div>
        	);
    }
}