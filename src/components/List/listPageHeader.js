import React, { Component } from "react";

class listPageHeader extends Component {
    state = {
        currentTitle: "",
        disabled: true
    }

    componentDidMount() {
        this.setState({
            currentTitle: this.props.title
        });
        this.autosize();
    }

    updateTitle = (e) => {
        this.autosize();
        this.setState({
            currentTitle: e.target.value
        })
    }

    autosize = () => {
        const textarea = document.querySelector('textarea');
        setTimeout(function(){
            textarea.style.cssText = 'height:auto; padding:0';
            textarea.style.cssText = 'height:' + textarea.scrollHeight + 'px';
        },0);
    }

    editTitle = () => {
        this.setState({
            disabled: !this.state.disabled
        });
    }

    startEditTitle = () => {
        this.editTitle();
        // dispatch edit list title action
        this.props.startEditListTitle(this.props.id, this.state.currentTitle);
    }

    render() {
        return (
            <div className="listPage__header">
                <div className="container-s">
                    <div className="listPage__header__content">
                        <div className="listPage__header__content__grid">
                            <div>
                                <textarea 
                                    id="listPage__input"
                                    className={this.state.disabled ? "listPage__input--disabled" : "listPage__input--enabled"}
                                    disabled={this.state.disabled}
                                    rows="1"
                                    type="text"
                                    onBlur={this.startEditTitle}
                                    onChange={(e) => this.updateTitle(e)}
                                    value={this.state.currentTitle} />
                                    <hr />
                            </div>
                             
                            <div onClick={this.editTitle} className="listPage__edit">
                                <i className="fas fa-edit"></i>
                            </div>
                            
                        
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

// <h1>{props.title} <i className="fas fa-edit"></i></h1>

export default listPageHeader;