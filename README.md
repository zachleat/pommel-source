# pommel-source

A CSS file to better style a zero-dependency details/summary plugin to expand and show source code.

## Installation

Available on [npm](https://www.npmjs.com/package/pommel-source).

```
npm install pommel-source
```

## Usage

```html
<link rel="stylesheet" href="pommel-source.css">
<details class="pommel-source" open>
	<summary>Embed</summary>
	<pre>* { box-sizing: border-box; }</pre>
</details>
```

### Works with @11ty/eleventy-plugin-syntaxhighlight

```html
<!-- include Prism theme -->
<link rel="stylesheet" href="prism-theme.css">
<link rel="stylesheet" href="pommel-source.css">

<details class="pommel-source" open>
	<summary>Embed</summary>
	{%- highlight css %}
* { box-sizing: border-box; }
	{%- endhighlight %}
</details>
```