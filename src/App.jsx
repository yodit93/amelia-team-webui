import "./App.css";
import ChatWithGemini from "./features/gemini-chat/components/ChatWithGemini";

const App = () => {
	return (
		<div className="content">
			<section className="chat">
				<ChatWithGemini />
			</section>
		</div>
	);
};

export default App;
