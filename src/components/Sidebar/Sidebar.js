import React from "react";
import List from "./List";
import "./Sidebar.css";
const sideBarContainer = { width: "20%" };
const balanceStyle = { color: "#8E94A1", fontSize: "16px" };
const balanceAmount = { fontSize: "16px" };
const innerContainer = {
	width: "90%",
	margin: "auto",
};
const addSquare = {
	color: "#526DAA",
	transform: "scale(1.7)",
};
const addWallet = { color: "#526DAA", fontSize: "14px" };

function Sidebar({
	data,
	setCounter1,
	setCounter2,
	setCounter3,
	isOpen,
	setsubOpen,
	subOpen,
}) {
	console.log("isopen", isOpen);
	return (
		<>
			<div
				className={`mt-4  ml-1 text-left pt-4 ${
					!isOpen ? "sidebar-close" : "sidebar-open"
				}`}
				style={sideBarContainer}
			>
				<div style={innerContainer}>
					<div className="d-flex align-items-center justify-content-between pl-4 pt-3 pr-4 pb-3">
						<div style={balanceStyle}>Total Balance</div>
						<div className="font-weight-bold" style={balanceAmount}>
							$137.17
						</div>
						<i style={{ color: "#DF642B" }} class="fas fa-eye"></i>
						<i
							onClick={() => {
								setsubOpen(!subOpen);
							}}
							style={{
								color: "#526DAA",
								transform: subOpen ? "rotate(180deg)" : "",
							}}
							class="fas fa-caret-right"
						></i>
					</div>

					<div
						className="d-flex align-items-center justify-content-between pl-4 pt-3 pr-4 pb-3"
						style={{ backgroundColor: "#EFF2F7" }}
					>
						<span className="font-weight-bold" style={addWallet}>
							Add new wallet
						</span>
						<i
							style={addSquare}
							class="far fa-plus-square ml-5"
						></i>
					</div>

					<List
						data={data}
						setCounter1={setCounter1}
						setCounter2={setCounter2}
						setCounter3={setCounter3}
					/>
				</div>
			</div>
			{/* {!isOpen && <div style={{ width: "20%" }}></div>} */}
		</>
	);
}

export default Sidebar;
