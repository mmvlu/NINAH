import os
from PIL import Image

def convert_webp_to_png(directory="."):
    # Проходим по всем файлам в указанной директории
    for filename in os.listdir(directory):
        if filename.lower().endswith(".webp"):
            webp_path = os.path.join(directory, filename)
            png_path = os.path.join(directory, os.path.splitext(filename)[0] + ".png")
            
            try:
                # Открываем и сохраняем в формате PNG
                with Image.open(webp_path) as img:
                    img.save(png_path, "PNG")
                
                # Удаляем исходный webp после успешного сохранения
                os.remove(webp_path)
                print(f"Успешно: {filename} -> {os.path.basename(png_path)}")
                
            except Exception as e:
                print(f"Ошибка при обработке {filename}: {e}")

if __name__ == "__main__":
    convert_webp_to_png()