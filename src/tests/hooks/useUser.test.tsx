// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
    rest.get(
        "https://randomuser.me/api/",
        (req, res, ctx) => {
            return res(
                ctx.json(
                    {
                        "results": [
                            {
                                "gender": "female",
                                "name": {
                                    "title": "Miss",
                                    "first": "Kaya",
                                    "last": "Kittelsen"
                                },
                                "location": {
                                    "street": {
                                        "number": 1850,
                                        "name": "Framnes terrasse"
                                    },
                                    "city": "Kirkevoll",
                                    "state": "Nord-Trøndelag",
                                    "country": "Norway",
                                    "postcode": "8754",
                                    "coordinates": {
                                        "latitude": "47.9114",
                                        "longitude": "66.1810"
                                    },
                                    "timezone": {
                                        "offset": "+8:00",
                                        "description": "Beijing, Perth, Singapore, Hong Kong"
                                    }
                                },
                                "email": "kaya.kittelsen@example.com",
                                "login": {
                                    "uuid": "763d2366-8259-4da8-9fba-81c7ac9ae00b",
                                    "username": "purplelion177",
                                    "password": "redman",
                                    "salt": "ivM1NHw7",
                                    "md5": "db957762d35d2fa8179db592adbdcbba",
                                    "sha1": "085f0ad53c910c885ec9216f282b31cf451e67e2",
                                    "sha256": "eaf09276e1a4fc85d6f4ab88d9ab1cad226ca2673770b563d44c5939ddd4868d"
                                },
                                "dob": {
                                    "date": "1985-10-19T06:26:28.341Z",
                                    "age": 37
                                },
                                "registered": {
                                    "date": "2010-05-10T19:03:51.397Z",
                                    "age": 12
                                },
                                "phone": "75690076",
                                "cell": "92519536",
                                "id": {
                                    "name": "FN",
                                    "value": "19108507201"
                                },
                                "picture": {
                                    "large": "https://randomuser.me/api/portraits/women/65.jpg",
                                    "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
                                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
                                },
                                "nat": "NO"
                            }
                        ],
                        "info": {
                            "seed": "1535a646b09b302b",
                            "results": 1,
                            "page": 1,
                            "version": "1.3"
                        }
                    }
                ))
        }
    )
);


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load user", async () => {
    const { container } = render(<App />);
    await waitFor(() => screen.getByText(/Kittelsen/i));
    expect(container.getElementsByTagName("img").length).toBe(1);
});
