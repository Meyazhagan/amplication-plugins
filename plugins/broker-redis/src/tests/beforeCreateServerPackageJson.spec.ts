import { DsgContext } from "@amplication/code-gen-types";
import { mock } from "jest-mock-extended";
import { name } from "../../package.json";
import RedisBrokerPlugin from "../index";

describe("Testing beforeServerPackageJson hook", () => {
  let plugin: RedisBrokerPlugin;
  let context: DsgContext;
  beforeEach(() => {
    plugin = new RedisBrokerPlugin();
    context = mock<DsgContext>({
      pluginInstallations: [{ npm: name }],
    });
  });
  it("should add the dependencies required to use Redis to the package.json file", () => {
    const { updateProperties } = plugin.beforeCreateServerPackageJson(context, {
      fileContent: "",
      updateProperties: [{}],
    });
    expect(updateProperties).toStrictEqual([
      {
        dependencies: {
          ioredis: "^5.3.2",
          "@nestjs/microservices": "10.2.7",
        },
      },
    ]);
  });
});
