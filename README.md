<h1>
everyday-math <a href="https://npmjs.org/package/everyday-math"><img src="https://img.shields.io/badge/npm-v0.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-77-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/everyday-math@0.0.1/dist/everyday-math.min.js"><img src="https://img.shields.io/badge/brotli-416b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Everyday math utilities.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i everyday-math </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add everyday-math </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add everyday-math</code>
</td></tr></table>
</h4>

## API

<p>  <details id="AggregateStats$37" title="Interface" ><summary><span><a href="#AggregateStats$37">#</a></span>  <code><strong>AggregateStats</strong></code>    </summary>  <a href="src/everyday-math.ts#L58">src/everyday-math.ts#L58</a>  <ul>        <p>  <details id="max$40" title="Property" ><summary><span><a href="#max$40">#</a></span>  <code><strong>max</strong></code>    </summary>  <a href="src/everyday-math.ts#L61">src/everyday-math.ts#L61</a>  <ul><p>number</p>        </ul></details><details id="maxStd$41" title="Property" ><summary><span><a href="#maxStd$41">#</a></span>  <code><strong>maxStd</strong></code>    </summary>  <a href="src/everyday-math.ts#L62">src/everyday-math.ts#L62</a>  <ul><p>number</p>        </ul></details><details id="mean$44" title="Property" ><summary><span><a href="#mean$44">#</a></span>  <code><strong>mean</strong></code>    </summary>  <a href="src/everyday-math.ts#L65">src/everyday-math.ts#L65</a>  <ul><p>number</p>        </ul></details><details id="meanStd$45" title="Property" ><summary><span><a href="#meanStd$45">#</a></span>  <code><strong>meanStd</strong></code>    </summary>  <a href="src/everyday-math.ts#L66">src/everyday-math.ts#L66</a>  <ul><p>number</p>        </ul></details><details id="median$42" title="Property" ><summary><span><a href="#median$42">#</a></span>  <code><strong>median</strong></code>    </summary>  <a href="src/everyday-math.ts#L63">src/everyday-math.ts#L63</a>  <ul><p>number</p>        </ul></details><details id="medianStd$43" title="Property" ><summary><span><a href="#medianStd$43">#</a></span>  <code><strong>medianStd</strong></code>    </summary>  <a href="src/everyday-math.ts#L64">src/everyday-math.ts#L64</a>  <ul><p>number</p>        </ul></details><details id="min$38" title="Property" ><summary><span><a href="#min$38">#</a></span>  <code><strong>min</strong></code>    </summary>  <a href="src/everyday-math.ts#L59">src/everyday-math.ts#L59</a>  <ul><p>number</p>        </ul></details><details id="minStd$39" title="Property" ><summary><span><a href="#minStd$39">#</a></span>  <code><strong>minStd</strong></code>    </summary>  <a href="src/everyday-math.ts#L60">src/everyday-math.ts#L60</a>  <ul><p>number</p>        </ul></details></p></ul></details><details id="Stats$31" title="Interface" ><summary><span><a href="#Stats$31">#</a></span>  <code><strong>Stats</strong></code>    </summary>  <a href="src/everyday-math.ts#L50">src/everyday-math.ts#L50</a>  <ul>        <p>  <details id="max$33" title="Property" ><summary><span><a href="#max$33">#</a></span>  <code><strong>max</strong></code>    </summary>  <a href="src/everyday-math.ts#L52">src/everyday-math.ts#L52</a>  <ul><p>number</p>        </ul></details><details id="mean$34" title="Property" ><summary><span><a href="#mean$34">#</a></span>  <code><strong>mean</strong></code>    </summary>  <a href="src/everyday-math.ts#L53">src/everyday-math.ts#L53</a>  <ul><p>number</p>        </ul></details><details id="median$35" title="Property" ><summary><span><a href="#median$35">#</a></span>  <code><strong>median</strong></code>    </summary>  <a href="src/everyday-math.ts#L54">src/everyday-math.ts#L54</a>  <ul><p>number</p>        </ul></details><details id="min$32" title="Property" ><summary><span><a href="#min$32">#</a></span>  <code><strong>min</strong></code>    </summary>  <a href="src/everyday-math.ts#L51">src/everyday-math.ts#L51</a>  <ul><p>number</p>        </ul></details><details id="std$36" title="Property" ><summary><span><a href="#std$36">#</a></span>  <code><strong>std</strong></code>    </summary>  <a href="src/everyday-math.ts#L55">src/everyday-math.ts#L55</a>  <ul><p>number</p>        </ul></details></p></ul></details><details id="aggregateStats$49" title="Function" ><summary><span><a href="#aggregateStats$49">#</a></span>  <code><strong>aggregateStats</strong></code><em>(results)</em>    </summary>  <a href="src/everyday-math.ts#L79">src/everyday-math.ts#L79</a>  <ul>    <p>    <details id="results$51" title="Parameter" ><summary><span><a href="#results$51">#</a></span>  <code><strong>results</strong></code>    </summary>    <ul><p><a href="#Stats$31">Stats</a>  []</p>        </ul></details>  <p><strong>aggregateStats</strong><em>(results)</em>  &nbsp;=&gt;  <ul><a href="#AggregateStats$37">AggregateStats</a></ul></p></p>    </ul></details><details id="clamp$1" title="Function" ><summary><span><a href="#clamp$1">#</a></span>  <code><strong>clamp</strong></code><em>(value, lower, upper)</em>    </summary>  <a href="src/everyday-math.ts#L3">src/everyday-math.ts#L3</a>  <ul>    <p>    <details id="value$3" title="Parameter" ><summary><span><a href="#value$3">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="lower$4" title="Parameter" ><summary><span><a href="#lower$4">#</a></span>  <code><strong>lower</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="upper$5" title="Parameter" ><summary><span><a href="#upper$5">#</a></span>  <code><strong>upper</strong></code>    </summary>    <ul><p>number</p>        </ul></details>  <p><strong>clamp</strong><em>(value, lower, upper)</em>  &nbsp;=&gt;  <ul>number</ul></p></p>    </ul></details><details id="mean$28" title="Function" ><summary><span><a href="#mean$28">#</a></span>  <code><strong>mean</strong></code><em>(nums)</em>    </summary>  <a href="src/everyday-math.ts#L41">src/everyday-math.ts#L41</a>  <ul>    <p>    <details id="nums$30" title="Parameter" ><summary><span><a href="#nums$30">#</a></span>  <code><strong>nums</strong></code>    </summary>    <ul><p>number  []</p>        </ul></details>  <p><strong>mean</strong><em>(nums)</em>  &nbsp;=&gt;  <ul>number</ul></p></p>    </ul></details><details id="median$19" title="Function" ><summary><span><a href="#median$19">#</a></span>  <code><strong>median</strong></code><em>(nums)</em>    </summary>  <a href="src/everyday-math.ts#L30">src/everyday-math.ts#L30</a>  <ul>    <p>    <details id="nums$21" title="Parameter" ><summary><span><a href="#nums$21">#</a></span>  <code><strong>nums</strong></code>    </summary>    <ul><p>number  []</p>        </ul></details>  <p><strong>median</strong><em>(nums)</em>  &nbsp;=&gt;  <ul>number</ul></p></p>    </ul></details><details id="round$6" title="Function" ><summary><span><a href="#round$6">#</a></span>  <code><strong>round</strong></code><em>(num, decimalPlaces)</em>     &ndash; Round half away from zero ('commercial' rounding)
Uses correction to offset floating-point inaccuracies.
Works symmetrically for positive and negative numbers.
See https://stackoverflow.com/a/48764436/419436</summary>  <a href="src/everyday-math.ts#L13">src/everyday-math.ts#L13</a>  <ul>    <p>    <details id="num$8" title="Parameter" ><summary><span><a href="#num$8">#</a></span>  <code><strong>num</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="decimalPlaces$9" title="Parameter" ><summary><span><a href="#decimalPlaces$9">#</a></span>  <code><strong>decimalPlaces</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>0</code></span>  </summary>    <ul><p>number</p>        </ul></details>  <p><strong>round</strong><em>(num, decimalPlaces)</em>  &nbsp;=&gt;  <ul>number</ul></p></p>    </ul></details><details id="scaleLinear$10" title="Function" ><summary><span><a href="#scaleLinear$10">#</a></span>  <code><strong>scaleLinear</strong></code><em>(rangeMin, rangeMax, domainMin, domainMax)</em>    </summary>  <a href="src/everyday-math.ts#L19">src/everyday-math.ts#L19</a>  <ul>    <p>    <details id="rangeMin$12" title="Parameter" ><summary><span><a href="#rangeMin$12">#</a></span>  <code><strong>rangeMin</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="rangeMax$13" title="Parameter" ><summary><span><a href="#rangeMax$13">#</a></span>  <code><strong>rangeMax</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="domainMin$14" title="Parameter" ><summary><span><a href="#domainMin$14">#</a></span>  <code><strong>domainMin</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="domainMax$15" title="Parameter" ><summary><span><a href="#domainMax$15">#</a></span>  <code><strong>domainMax</strong></code>    </summary>    <ul><p>number</p>        </ul></details>  <p><strong>scaleLinear</strong><em>(rangeMin, rangeMax, domainMin, domainMax)</em>  &nbsp;=&gt;  <ul><details id="__type$16" title="Function" ><summary><span><a href="#__type$16">#</a></span>  <em>(x)</em>    </summary>    <ul>    <p>    <details id="x$18" title="Parameter" ><summary><span><a href="#x$18">#</a></span>  <code><strong>x</strong></code>    </summary>    <ul><p>number</p>        </ul></details>  <p><strong></strong><em>(x)</em>  &nbsp;=&gt;  <ul>number</ul></p></p>    </ul></details></ul></p></p>    </ul></details><details id="stats$46" title="Function" ><summary><span><a href="#stats$46">#</a></span>  <code><strong>stats</strong></code><em>(nums)</em>    </summary>  <a href="src/everyday-math.ts#L69">src/everyday-math.ts#L69</a>  <ul>    <p>    <details id="nums$48" title="Parameter" ><summary><span><a href="#nums$48">#</a></span>  <code><strong>nums</strong></code>    </summary>    <ul><p>number  []</p>        </ul></details>  <p><strong>stats</strong><em>(nums)</em>  &nbsp;=&gt;  <ul><a href="#Stats$31">Stats</a></ul></p></p>    </ul></details><details id="std$22" title="Function" ><summary><span><a href="#std$22">#</a></span>  <code><strong>std</strong></code><em>(nums)</em>    </summary>  <a href="src/everyday-math.ts#L43">src/everyday-math.ts#L43</a>  <ul>    <p>    <details id="nums$24" title="Parameter" ><summary><span><a href="#nums$24">#</a></span>  <code><strong>nums</strong></code>    </summary>    <ul><p>number  []</p>        </ul></details>  <p><strong>std</strong><em>(nums)</em>  &nbsp;=&gt;  <ul>number</ul></p></p>    </ul></details><details id="sum$25" title="Function" ><summary><span><a href="#sum$25">#</a></span>  <code><strong>sum</strong></code><em>(nums)</em>    </summary>  <a href="src/everyday-math.ts#L39">src/everyday-math.ts#L39</a>  <ul>    <p>    <details id="nums$27" title="Parameter" ><summary><span><a href="#nums$27">#</a></span>  <code><strong>nums</strong></code>    </summary>    <ul><p>number  []</p>        </ul></details>  <p><strong>sum</strong><em>(nums)</em>  &nbsp;=&gt;  <ul>number</ul></p></p>    </ul></details></p>

## Contributing

[Fork](https://github.com/stagas/everyday-math/fork) or [edit](https://github.dev/stagas/everyday-math) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
