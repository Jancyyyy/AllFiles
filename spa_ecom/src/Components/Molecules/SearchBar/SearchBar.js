import React from "react";
import Input from '../../atoms/Input'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar-inner">
        <div className="search-icon">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEUAAAD////4+Pibm5v8/Pzt7e3y8vKhoaH19fXY2NiOjo5ZWVk6OjrFxcVkZGTl5eVMTEzS0tLMzMy9vb2GhoZsbGzf3998fHwUFBRSUlKzs7MuLi5BQUGUlJR2dnZeXl4hISELCwuqqqq5X2W3AAAGCUlEQVR4nO1c2YKqMAwd2RRFEUHFDdH//8irM1dH6WmbpmH0wfPeeEjTNFv9+nLAbrbepsGggygvx8u5ixw5tIcij7qE7ojTcvLXjI5hruXzi7La/R2lJh0RKF2Rl9mfMNqEREL/sWrqvim128SN0zetXillQ2dG38h7pNXEPE4XFD3Z1qZgU7pi2PbA6UA9cTqsxB1q5qemH4SynGZ8a3rEQtI7OLomPeKjGKezFKfBIBFyDnUpx+mCSoJTuxDlNBgcBDhJHLtneB9Ckp6iIIl/kIz0IZYcq6n1F9Jt2Gza2zdsmnCbWtf42dXWLDxZLLNWWdRmTWGOJaK1Byezf1qMVUJ3YmOjjgP+lbM2GEgwtcmdl0pO8YsVN1DeGfagpLjmiWH3F0xSeoNNqbfFRC+D5670UebZQcpZZwLBhsFprqMU753k7HUBRu7O6aRT/NTVRFvd3enuQ3Wb57J1N2g8y8g1h641pjBmcPr6GmNhridQo3Iep4vHw+JmTkKO2O9xOel0lZ5cZODYYMjmdEmGoESXmzmDEhZO39UFvAtjBwFQUQy/8oh6hYQuyevn6NKLfBORCTrQ9AMIfZR/aI2MPSIfQHT0Vt6c8CVBdcZLsDaQyCLhBhLXonMyFeCEJdNMHV3rUStCagdURTP1BnzOVoQTvL1yUjkNLBxxAjKEOThDpOoCWJcKcYIhNuX87cDuud3mJoCTnRCWVeqyuBUjlYFTRFgGjq2UmV8Bsi67USG365NkdwE2wm5UwEslrSCpWj1Hdsc8U/2bwLX3ALX9lba2NcB1chIYPVSjiq3VDhBf0AMxCtQcwh6pgUqwbFtlw/hq9ZIJZEmBm8Z6utW6a96KkspUS7cGtWp4X8h2NlvVEVpPkvodU6/MSiWl7kVpW6P6TusSN5zUe+z1pMDlanXpr9CUlRSwKVlStZp+W39BPX2inUN4+qx7oZ4N+33phJ362VaXoO54LDuwslcLFdbiJ4gMe7/7rFUqUNySbd3P1B+wXsigOinSYL0DlIqtyRLIgWR9gnr47EHeRB3UcKkB2qHKt3e0wIl1LsKbAHIAQokDNLIF+uN3gCohIa0EPsGvLPwE4M8paSWqBMm5zz2Q3hLWgWVy4zxgH0aUdaAE4VlCfwAohpNCI9QIk/KfSDYprUTFYW4buoMWdB3srvMK2K+QyZJReZ94X6DGvUiBsUbtZKJloAKjyAGEYwrUxWj/Iv+gGPkoeloCm6uFL6caDWbTG0Y7ONfN79X+AE72OXwq7tn79Yxwb9uhGF5DAbnb6MYzjnCg1ilUw6patWxOsNnqWHdGNfiBR16awQbyIHWTp5m5cJRyw17zIsI1pNWIYc2Vb3TCXAUtNcMusXuXrdGMwTEadroBo5FrGBPqxro4N5d22nvbOkjZa6cYWZFjo51dHJEDmbrSTjAmvMTNMPG9oJnDzDAcG/PqJifDLHM0tcqs56lxkDjg5UiZcdh2am4eVtbxbMeJwxtALekRyXmCv3Z33FLejkQ8XWnG1n6Rl4dO8HBahiXlSZuHrjTXzdP3jpKiHB6qqjoMy5Q2kX4HT1fM11dUJDxd9czqPXXFtKvKyUrcwfOiKJEXBNOudEGaFHisdtIvep6RMPsHY8ODBSIiw8XDbCDMfLcwbgyvS5h2dfENPm8hR9+tKsMFwWXl8Wq0+B+AGXTF7ksZXndQKJl1xW5M1Yxnv/lT9Ky/IEYePbxJ4XIQk0XXWPrQ1QVHy7uxh48fgmC+H11dsCYEcqutJmEx6MpzoHS/PJt4peFMH5QYdOVTbvqP43Ba5M/uK1kV5cFmHP3p6gd1tpktm+oQDsND1Sxnmx2l56XXVSCgKy70uoqkBpUZMOjqRX91coVBV3/+Rye/+OiKDr2uoo+uOnhPXeHXbN/WLveHD8746IoOQ7Hio6sODLp64e2sz7w+uuqih4xeADJ/OiANra5kZwKFWEWvJKXbQbnpLRawrnxer0sA6YpfI5KCqqtXZlw3dHUV9Psne0Q864r1nyY94Px2eroifDs9XXHTVfQ2eroifDs9XbFeJPH2Hgv/Aw8xTMJdwZ0yAAAAAElFTkSuQmCC"
            style={{ width: '20px', height: '20px' }} />
        </div>
        <div className="flex-1 ">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

/*<div className="user-icon">
        <IconStories.UserIcon />
        <h1 className="user-name">User</h1>
      </div>

      <div className="cart-icon">
        <IconStories.CartIcon />
        <h1 className="cart-name">Cart</h1>
      </div>*/