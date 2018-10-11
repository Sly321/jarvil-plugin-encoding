import { JarvilPlugin } from "jarvil-plugin-tools/dist/index"

export default class DecodeEncodePlugin implements JarvilPlugin {
	public get trigger(): string { return "encode" }
	public get exact(): boolean { return false }

	getResultItems(...args: string[]): import("/Users/svenliebig/GitHub/jarvil-plugin-tools/dist/interfaces/ResultItem").ResultItem[] {
		throw new Error("Method not implemented.");
	}

	action(actionId: string, input: string): void {
		throw new Error("Method not implemented.");
	}
}