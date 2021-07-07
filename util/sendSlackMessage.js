const Slack = require("slack-node");
webhookUri =
  "https://hooks.slack.com/services/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";
slack = new Slack();
slack.setWebhook(webhookUri);
const sendSlackMessage = () => {
  slack.webhook(
    {
      channel: "#모델지원알람", // 현 슬랙의 채널
      username: "오늘룩 알리미", // 슬랙에서 보여질 웹훅 이름
      text: "고객님이 모델신청을 하셨습니다.", //텍스트
      attachments: [
        {
          fallback:
            "<https://docs.google.com/spreadsheets/d/1mVuIF-N07VsisTCjOuB4e4dr1lZfsM8HDHwYCm1Jz6k/edit#gid=1959700167>",
          pretext:
            "<https://docs.google.com/spreadsheets/d/1mVuIF-N07VsisTCjOuB4e4dr1lZfsM8HDHwYCm1Jz6k/edit#gid=1959700167>",
          color: "#00FFFF",
          fields: [
            {
              title: "모델지원알람",
              value: "해당링크로 확인해주세요",
              short: false,
            },
          ],
        },
      ],
    },
    function (err, response) {
      console.log(response);
    }
  );
};
module.exports = { sendSlackMessage: sendSlackMessage };
