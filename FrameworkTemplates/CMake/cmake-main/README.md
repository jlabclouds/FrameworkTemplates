# cmake
- cross-platform C++ app that doesnt depend on .sln or .vcxproj files

C++ / Windows / Linux / Console
## Features

- Cross-platform support (Windows, Linux)
- No dependency on Visual Studio project files
- Simple console application structure
- Easily customizable CMake configuration

## Getting Started

### Prerequisites

- [CMake](https://cmake.org/download/)
- C++ compiler (e.g., GCC, Clang, MSVC)

### Build Instructions

```sh
git clone <repository-url>
cd cmake-main
mkdir build
cd build
cmake ..
cmake --build .
```

### Running

After building, run the executable from the `build` directory:

```sh
./cmake-main
```

## Project Structure

```
cmake-main/
├── CMakeLists.txt
├── src/
│   └── main.cpp
└── README.md
```

## License

This project is licensed under the MIT License.