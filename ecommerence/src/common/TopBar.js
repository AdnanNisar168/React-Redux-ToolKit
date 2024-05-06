import React from "react";


export default function TopBar(props) {

    return (
        <>
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3">
                            <i className="fas fa-map-maker-alt me-2 text-secondary"></i>
                            <a>123 street</a>
                        </small>
                    </div>
                </div>
            </div>
        </>
    )

}