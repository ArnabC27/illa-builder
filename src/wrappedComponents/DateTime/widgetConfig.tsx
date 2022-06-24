import { SearchIcon } from "@illa-design/icon"
import { WidgetConfig } from "@/wrappedComponents/interface"
import i18n from "@/i18n/config"

export const DATE_TIME_WIDGET_CONFIG: WidgetConfig = {
  type: "DATE_TIME_WIDGET",
  displayName: "dateTime",
  widgetName: i18n.t("widget.date_time.name"),
  icon: <SearchIcon />,
  sessionType: "CALENDAR",
  w: 20,
  h: 5,
  defaults: {
    placeholder: "YYYY-MM-DD",
    dateFormat: "YYYY-MM-DD",
    timeFormat: "HH:mm",
    minuteStep: "{{1}}",
  },
}
