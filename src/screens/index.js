import MiniScreen from "../components/MiniScreen";
import Page from "../components/Page";

const Index = () => (
	<Page>
		<MiniScreen
			pos={"top-left"}
			color={"#231F20"}
			route={"aboutme"}
			text={"Hi there!"}
		/>
		<MiniScreen
			pos={"top-right"}
			color={"#383F51"}
			route={"experience"}
			text={"My Adventurer's Log"}
		/>
		<MiniScreen
			pos={"bottom-right"}
			color={"#32161F"}
			route={"contact"}
			text={<>Me On<br />The Internet</>}
		/>
		<MiniScreen
			pos={"bottom-left"}
			color={"#2660A4"}
			route={"projects"}
			text={"The Garage"}
		/>
	</Page>
)

export default Index;