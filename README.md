# health-dashboard-example-data

An example data repository for the https://github.com/rafaeleyng/health-dashboard

## structure

A data repository for the [health-dashboard](https://github.com/rafaeleyng/health-dashboard) consists of 3 types of data:
- metrics
- annotations
- dashboards

Check the file structure and contents in this repository and the following documentation to understand each type of data.

Note: you should first input all your `metrics` and `annotations`, and then build your `dashboards`, using the data from metrics and annotations to better create your pannels and visualize them as you build.

### metrics

In the `metrics` folder, each file should contain data for a particular blood test, like your red blood cells. This data feeds the API that Grafana queries to get your metrics.

You can also group files of related data (like several blood tests related to your heart) in a folder called `heart`, for instance (this is just for your repository organization, the application will see your data equally either way). Don't nest deeper than 1 folder.

> Note: inside `metrics`, files **must** start with uppercase and folders **must** start with lowercase.

Metrics files can be either in JavaScript (`.js`) or JSON (`.json`). Check the examples in the `metrics` folder to understand the format.

Dates are represented in the format `'YYYY-MM-DD'`.

### annotations

These go in a single file, `annotations.[js|json]`.

Annotations should be used to mark significant events for your medical record (like a surgery, important medicines you've taken, or when you stopped smoking). This data feeds the API that Grafana queries to get your annotations.

Annotations can be enriched with tags, that can be filtered in Grafana.

The file can be either in JavaScript (`.js`) or JSON (`.json`). Check the example to understand the format.

Dates are represented in the format `'YYYY-MM-DD'`.

### dashboards

Each file in the `dashboards` folder describes a dashboard that will be created in Grafana when you run the system.

Dashboard files are mandatory to be in JSON (`.json`) format, because they are sent directly to the Grafana API after starting Grafana. The format is the one used by the Grafana API to create a dashboard.

As stated before, you should create your dashboards directly in Grafana and then export them as JSON to save in your data repo. The model that Grafana exports goes in the `"dashboard"` property of each dashboard JSON file.

Note that since this is a creation, you should pass the following fields (inside the `"dashboard"` property) as `null` (it might be filled in the exported data, if you saved your dashboard in Grafana):
```json
"id": null,
"uid": null,
```
