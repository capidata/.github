#!/usr/bin/env python3
"""Dev server with SPA fallback for clean URLs."""
import http.server
import os

PORT = 8080
DIR = os.path.dirname(os.path.abspath(__file__))


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

    def do_GET(self):
        # If path has no extension and isn't root, serve index.html (SPA fallback)
        path = self.path.split("?")[0].split("#")[0]
        file_path = os.path.join(DIR, path.lstrip("/"))
        if path != "/" and "." not in os.path.basename(path) and not os.path.exists(file_path):
            self.path = "/index.html"
        return super().do_GET()


if __name__ == "__main__":
    with http.server.HTTPServer(("", PORT), SPAHandler) as server:
        print(f"Serving at http://localhost:{PORT}")
        server.serve_forever()
