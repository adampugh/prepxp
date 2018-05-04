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
        });
    }

    handleOnKeyDown = (e) => {
        if (e.key === "Enter") {
            this.startEditTitle();
        }
    }


    autosize = () => {
        // stop larger titles creating a scrollbar
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
        if (this.state.currentTitle.length > 0) {
            this.editTitle();
            this.props.startEditListTitle(this.props.id, this.state.currentTitle);
        }
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
                                    onKeyDown={(e) => this.handleOnKeyDown(e)}
                                    spellCheck={false}
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

export default listPageHeader;