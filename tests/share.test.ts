import { describe, expect, it } from "vitest";

import { decodeSharePayload, MAX_ENCODED_PAYLOAD_SIZE } from "@/helpers/share";
import fixtures from "./fixtures/share-links.json";

// Links, payloads and errors come from the server's SharePayload.to_base64 / from_base64.
const fragment = (link: string): string => new URL(link).hash.slice(1);

describe("decodeSharePayload", () => {
  it.each(Object.entries(fixtures.valid))("decodes the %s fixture", async (_, fixture) => {
    expect(await decodeSharePayload(fragment(fixture.link))).toEqual(fixture.expected);
  });

  it.each(Object.entries(fixtures.rejected))("rejects the %s fixture", async (_, fixture) => {
    await expect(decodeSharePayload(fragment(fixture.link))).rejects.toThrow(fixture.error);
  });

  it("rejects an encoded payload over the size cap", async () => {
    await expect(decodeSharePayload("1" + "A".repeat(MAX_ENCODED_PAYLOAD_SIZE))).rejects.toThrow(
      "too large"
    );
  });
});
