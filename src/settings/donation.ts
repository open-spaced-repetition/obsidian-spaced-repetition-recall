// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import QR_alipay from ".github/funding/QR_alipay.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import QR_wechat from ".github/funding/QR_wechat.png";
import { t } from "src/lang/helpers";

export function buildDonation(containerEl: HTMLElement): void {
    const div = containerEl.createEl("div");
    const hr: HTMLElement = document.createElement("hr");
    div.appendChild(hr);
    div.style.width = "75%";
    div.style.textAlign = "center";
    div.style.margin = "0 auto";

    const text = document.createElement("p");
    text.textContent = t("DONATION_TEXT");
    div.appendChild(text);

    let anchor = document.createElement("a");
    const image = new Image();
    image.src = QR_alipay;
    image.width = 130;
    anchor.appendChild(image);
    div.appendChild(anchor);

    const image2 = new Image();
    image2.src = QR_wechat;
    image2.width = 130;
    anchor = document.createElement("a");
    anchor.appendChild(image2);
    div.appendChild(anchor);
}
